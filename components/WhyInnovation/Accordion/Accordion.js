import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import Box from '@material-ui/core/Box'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import React, { useEffect } from 'react'

import useMediaQuery from '@material-ui/core/useMediaQuery'
import cx from 'classnames'
import json2mq from 'json2mq'
import Typography from '../../Typography'
import { useInView } from 'react-intersection-observer'

const InnoAccordionn = (props) => {
  const phone = useMediaQuery(
    json2mq({
      maxWidth: 500,
    }),
  )
  const [expanded, setExpanded] = React.useState('')
  const [ref, inView] = useInView({ triggerOnce: true })
  useEffect(() => {
    if (inView) {
      setExpanded('panel0')
    }
  }, [inView])
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  return (
    <>
      <Box className="Accordion-innovation">
        {props.list.map((item, index) => {
          return (
            <Accordion
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              key={index}
            >
              <Box className="Accordion-innovation__summary">
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      style={{
                        color: '#000',
                        fontSize: '3rem',
                      }}
                    />
                  }
                >
                  <Typography
                    size={phone ? '2.33rem' : '2rem'}
                    color="#051438"
                    face="Bold"
                    style={{
                      textDecoration:
                        expanded === `panel${index}` ? 'none' : 'underline',
                    }}
                  >
                    {item.summary}
                  </Typography>
                </AccordionSummary>
              </Box>

              <AccordionDetails>
                <Box className="Accordion-innovation__details">
                  <Box
                    className="Accordion-innovation__icon"
                    style={{
                      opacity: '0',
                    }}
                  />
                  <Typography
                    size={phone ? '2rem' : '1.8rem'}
                    color="#71819B"
                    face="Medium"
                    height={phone ? '3.66rem' : '2.4rem'}
                    //align="justify"
                    style={{
                      width: 'calc(100% - 3rem)',
                    }}
                  >
                    {item.details}
                  </Typography>
                </Box>
              </AccordionDetails>
            </Accordion>
          )
        })}
      </Box>
      <div ref={ref} />
    </>
  )
}

export default InnoAccordionn
