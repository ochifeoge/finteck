import React, { useState } from "react";
import { faqs } from "../components/details";
import Button from "../components/Button";

const FAQ = () => {
  const [selected, setSelected] = useState(null);
  const handleSelection = (ID) => {
    setSelected(ID === selected ? null : ID);
  };
  return (
    <section className="mx-auto w-full max-w-[530px] flex flex-col gap-12 items-center">
      <div className="mb-4 text-center">
        <h2>Frequently Asked Questions</h2>
        <p className="mb-8">
          Find quick answers to common queries in our Frequently Asked Questions
          section. Your key to instant clarity on all things related to our
          charge card
        </p>
      </div>

      <div>
        {faqs?.map(({ question, id, answer }, index) => (
          <div key={index} className="w-full max-w-[28rem] mb-8">
            <div
              className="flex justify-between items-center mb-2 text-gray-700 cursor-pointer"
              onClick={() => handleSelection(id)}>
              <h4 className="text-lg">{question}</h4>
              <p className="text-lg">+</p>
            </div>

            {selected === id ? <p>{answer}</p> : null}
          </div>
        ))}
      </div>

      <div className="flex items-center flex-col gap-4 text-center">
        <h3>Still have a question?</h3>
        <p>
          Go ahead and reach out to us if you have{" "}
          <br className="hidden md:block" /> more questions
        </p>
        <Button label="contact us" active={true} />
      </div>
    </section>
  );
};

export default FAQ;
