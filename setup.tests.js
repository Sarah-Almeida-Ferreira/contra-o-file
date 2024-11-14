import "@testing-library/jest-dom";
import React from "react";

jest.mock("gatsby-plugin-image", () => ({
  StaticImage: ({ alt, src }) => <img alt={alt} src={src} />,
}));
