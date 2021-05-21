import { processData } from "../src/utils";
import payload from "./__fixtures__/payload.json";

describe(`processData`, () => {
  test.each`
    gender      | minHeight
    ${"male"}   | ${130}
    ${"male"}   | ${180}
    ${"female"} | ${120}
    ${"female"} | ${160}
  `(
    `consolidates the data correctly for gender $gender and minHeight $minHeight`,
    ({ gender, minHeight }) => {
      expect(processData({ gender, minHeight })(payload)).toMatchSnapshot();
    }
  );
});
