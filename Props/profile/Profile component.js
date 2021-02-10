import React from "react";
import PropTypes from "prop-types";

//Fullname
export const FullName = (props) => {
  return <h1>Fullname is {props.name}</h1>;
};
FullName.propTypes = {
  name: PropTypes.string,
};
//Bio
export const Bio = (props) => {
  return <p>{props.bio}</p>;
};
Bio.propTypes = {
  bio: PropTypes.string,
};
//Profession
export const Profession = (props) => {
  return (
    <>
      <h2>My profession is : {props.profession}</h2>
    </>
  );
};
Profession.prosTypes = {
  Profession: PropTypes.string,
};
//props.children
export const Image = (props) => {
  return <>{props.children}</>;
};
//handleName function as props
export class Foo extends React.Component {
  handleClick() {
    alert("Firas Saadi");
  }
  render() {
    return <button onClick={() => this.handleClick()}>Tap Here</button>;
  }
}

//defaulProps for email
export const Email = (props) => {
  return <h3>{props.email}</h3>;
};
Email.defaultProps = {
  email: "itsfiras2@outlook.com",
};
Email.propTypes = {
  email: PropTypes.string,
};
