import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TestSection`.
 */
export type TestSectionProps = SliceComponentProps<Content.TestSectionSlice>;

/**
 * Component for "TestSection" Slices.
 */
const TestSection = ({ slice }: TestSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for test_section (variation: {slice.variation})
      Slices
    </section>
  );
};

export default TestSection;
