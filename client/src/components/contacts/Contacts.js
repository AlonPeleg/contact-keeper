import React, { useContext, Fragment } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactItem from "./ContactItem";
import ContactContext from "../../context/contact/contactContext";

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  if (!contacts.length) {
    return (
      <TransitionGroup>
        <CSSTransition key="0" timeout={500} classNames="item">
          <h4 className="text-center">Please add a contact</h4>
        </CSSTransition>
      </TransitionGroup>
    );
  }

  return (
    <Fragment>
      <TransitionGroup>
        {filtered
          ? filtered.map(contact => (
              <CSSTransition key={contact.id} timeout={500} classNames="item">
                <ContactItem contact={contact} />
              </CSSTransition>
            ))
          : contacts.map(contact => (
              <CSSTransition key={contact.id} timeout={500} classNames="item">
                <ContactItem contact={contact} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contacts;
