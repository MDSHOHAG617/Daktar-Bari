import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

const HaveAnyQuestions = () => {
  return (
    <div>
      <div className="my-20">
        <h1 className=" text-xl lg:text-5xl ">Have any questions?</h1>
        <p className="text-xl font-normal mt-8">
          Find below our frequently asked questions. If you have other questions
          please contact us.
        </p>
      </div>
      {/* heading */}
      <div className="">
        <Accordion className="mx-auto w-9/12 border  ">
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>What do we treat?</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="font-normal text-lg text-justify">
                Common health issue Ask anything you would normally ask your GP.
                You can have an instant video with one of our GPs via a digital
                consultation from anywhere, at any time of day. Specialist
                advice Sometimes it's helpful to see a specialist when you want.
                And get educational advice, pre-screening, monitoring and
                follow-ups. For maternal and infant health care, chronic
                diseases such as diabetes, or other conditions, Daktar bari can
                help you to connect with the right specialist doctor and to stay
                healthy. More than 20 different specialities are available on
                Daktar bari. Mental health and wellbeing In a fast paced world,
                it is important to monitor and protect your mental health and
                wellbeing. Doctors can help you stay healthy whether you have
                symptoms at home or in your workplace of stress, smoking,
                anxiety, bereavement or depression.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>How does it work?</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="font-normal text-lg text-justify">
                You can register on our App and access several medical services
                easily. The basic video consultation service is straightforward:
                search for your relevant doctor with easy filters, talk to your
                doctor directly as included in your Daktar bari healthcare
                package or pay just prior the on-demand consultation starts.
                Then access your prescription uploaded by the doctor and you can
                order medicine or tests as recommended. Keep in touch with the
                doctor and use medicine reminders until your feel completely
                healthy again. Access plenty of other medical services including
                your personal Electronic Patient Record and health tips at any
                time through our homepage
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Who provides consultation on Daktar bari?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="font-normal text-lg text-justify">
                Only certified MBBS doctors can provide consultation via the
                Daktar bari app.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Are the registered doctors verified?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="font-normal text-lg text-justify">
                Yes, all our panel of doctors are verified. We verify their
                registration with BMDC, we also check doctors national id /
                passport with selfie to make sure the qualified doctors are
                getting registered.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                When are the doctors available for consultation?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="font-normal text-lg text-justify">
                Doctors are available according to their time availability. Our
                platform is available 24/7. Any doctor can come online at any
                time if they want.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default HaveAnyQuestions;
