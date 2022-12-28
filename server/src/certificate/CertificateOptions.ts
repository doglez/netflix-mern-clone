import fs from "fs";

// console.log(__dirname);
const cert = fs.readFileSync(__dirname + "/certificate.crt");
const ca = fs.readFileSync(__dirname + "/certificate.ca.crt");
const key = fs.readFileSync(__dirname + "/certificate.key");

const CertificateOptions = {
    cert,
    ca,
    key,
};

export default CertificateOptions;
