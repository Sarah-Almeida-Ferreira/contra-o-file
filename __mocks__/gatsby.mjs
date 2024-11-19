import { createElement } from "react";
const gatsby = jest.requireActual("gatsby");

export default {
  ...gatsby,
  graphql: jest.fn(),
  Slice: jest.fn().mockImplementation(({ alias, ...rest }) =>
    createElement("div", {
      ...rest,
      "data-test-slice-alias": alias,
    })
  ),
  useStaticQuery: jest.fn(),
};
