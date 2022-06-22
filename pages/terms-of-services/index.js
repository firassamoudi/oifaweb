import React from "react";

import PrivacySection from "../../components/PrivacySection/PrivacySection";
import Typography from "../../components/Typography";
import Layout from "../../layout";

const PrivacyPolicy = () => {
  return (
    <div className="PrivacyPolicy">
      <Layout>
        <header className="PrivacyPolicy__header">
          <div className="container container--std">
            <Typography
              className="PrivacyPolicy__heading"
              name="h1"
              size="4.1rem"
              color="#051438"
              face="Bold"
            >
              Terms of services
            </Typography>
          </div>
        </header>

        <div className="PrivacyPolicy__content">
          <div className="container container--std">
            <PrivacySection>
              <p>
                The purpose of these General Terms and Conditions of Use (known
                as "GTCU") is to provide a legal framework for the terms and
                conditions of provision of the platform (oifa.tech) and to
                define the conditions of access to and use of the services by
                the "User". The present GTCU are accessible on the platform
                under the heading ………. The GTCU must be accepted by any User
                wishing to access the platform. They constitute the contract
                between the platform and the User. Access to the platform by the
                User signifies his acceptance of these GCTU. The User undertakes
                to respect these conditions. Or if the platform includes a
                member area : Any registration or use of the platform implies
                acceptance without reservation or restriction of these Terms and
                Conditions by the user. Before using this platform, each user
                expressly accepts the present T&Cs by checking the box preceding
                the following text: "I acknowledge having read and understood
                the T&Cs and I accept them". In case of non-acceptance of the
                GCTU stipulated in this contract, the User must renounce access
                to the services offered by the platform. (oifa.tech) reserves
                the right to unilaterally modify the content of these GCTU at
                any time.
              </p>

              <h2>ARTICLE 1 : Legal notice</h2>
              <p>
                The edition of the platform (oifa.tech) is provided by the
                following two parties:{" "}
              </p>
              <ol>
                <li>
                  Company MAZAM SARL registered with the RC B24104182011 of
                  Tunis, head office is located at Avenue Khaled Ibn Walid,
                  Résidence EMNA, APP2, 2036 Ain Zaghouane, Tunis, Phone number
                  :25128412, e-mail : . VAT code : 1202926/V/A/M/000. The
                  Director of the publication is{" "}
                </li>
                <li>Company IMPACT LAB</li>
              </ol>

              <p>The host of the platform www.oifa.tech is the Company OVH. </p>

              <h2>ARTICLE 2 : Access to the platform</h2>
              <p>
                The platform (oifa.tech) offers several services to different
                users. These users are divided into "corporate"; any
                organization (public, private or civil society) that accesses
                the platform in order to publish an open innovation program or
                simply search for existing innovation agents on the platform,
                "evaluator"; experts that the corporate assignes to evaluate the
                applications received for its open innovation program or
                challenge, and finally "innovation agent"; designer, developer,
                student, startup, researcher who wants to participate in one of
                the programs available on the platform.
              </p>
              <p>
                Each and every type of user will be reviewed and validated by
                the administrative team of the platform before being able to
                access its services.{" "}
              </p>
              <p>
                The access to the platform (www.oifa.tech) varies according to
                the user:{" "}
              </p>

              <ol>
                <li>
                  Corporate: the access to the platform (oifa.tech) is not for
                  free. Indeed, any entity that wants to host one or more open
                  innovation program(s) or one or more challenge(s), or to
                  search for innovation agent profiles according to its
                  criteria, must pay a fee that will be determined (according to
                  its needs) by the administrative team of the platform
                  (oifa.tech) and contractually agreed.{" "}
                </li>
                <li>
                  Evaluator: the access to the platform (oifa.tech) is for free.
                  He/she can access it for a certain period of time once a
                  corporate assignes him/her to evaluate the applications
                  received for the program(s) or challenge(s).
                </li>
                <li>
                  <p>
                    Innovation agent : the access to the platform (oifa.tech) is
                    for free. He / She (after the validation step) can access
                    the following services :
                  </p>
                  <ul>
                    <li>Search for an open innovation program or challenge</li>
                    <li>Apply to one or more program(s)</li>
                    <li>Be contacted by one or several corporate(s)</li>
                    <li>
                      Manage his / her workspace and communicate with other team
                      members or the program manager once selected.
                    </li>
                  </ul>
                </li>
              </ol>

              <p>
                The platform is accessible anywhere to any user who has an
                Internet. All costs incurred by the User to access the service
                (computer equipment, Internet connection, etc.) are at his/her
                expense.
              </p>
              <p>
                The user, registered and validated by the OIFA administrative
                team, undertakes to provide truthful and accurate information
                concerning his civil status and contact details, in particular
                his email address. The User is responsible for updating the
                information provided. They are advised that they can change this
                information by logging on to their member area. To access the
                services, the User must identify himself using his user name and
                password which are strictly personal. As such, he/she is
                forbidden to disclose them. Otherwise, the User will remain
                solely responsible for the use that will be made of them.{" "}
              </p>

              <p>
                The User may also request to unsubscribe by sending an email to
                : This will be effective within a reasonable time. In case of
                non-compliance with the general terms of use, the platform
                (oifa.tech) will have the possibility to suspend or even close
                the account of a User after a formal notice sent by electronic
                means and remained without effect. Any deletion of an account,
                whatever the reason, will result in the pure and simple deletion
                of the account.{" "}
              </p>
            </PrivacySection>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default PrivacyPolicy;
