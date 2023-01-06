import { Config } from "jest";

const jestConfig: Config = {
    preset: "ts-jest",
    testEnvironment: "node",
    collectCoverage: true,
};

export default jestConfig;
