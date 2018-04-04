import React from "react";

const Copyright = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-12">
        <div className="copy-right text-right">
          Copyright &copy; {document.write(new Date().getFullYear())} by Susan R Bryant
        </div>
      </div>
    </div>
  </div>

);

export default Footer;
