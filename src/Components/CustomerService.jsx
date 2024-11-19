import React from "react";
import PropTypes from "prop-types";

const CustomerService = ({ label, href }) => {
  return (
    <li className="hover:text-gray-400 transition duration-200">
      <a href={href}>{label}</a>
    </li>
  );
};

CustomerService.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default CustomerService;