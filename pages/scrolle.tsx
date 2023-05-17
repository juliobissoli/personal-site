import { Scroll } from "scrollex";

const keyframes = {
  heading: {
    0: {
      translateX: 0,
    },
    200: {
      translateX: -500,
      position: 'fixed'
    },
  },
};

export default function App() {
  return (
    <Scroll.Container scrollAxis="y" className="h-[100vh]">
      <Scroll.Section className="h-[100vh] flex justify-center items-center bg-1">
        <Scroll.Item keyframes={keyframes.heading}>
          <h1>Page One</h1>
        </Scroll.Item>
      </Scroll.Section>
      <Scroll.Section className="h-[100vh] flex justify-center items-center bg-2">
        <Scroll.Item keyframes={keyframes.heading}>
          <h1>Page Two</h1>
        </Scroll.Item>
      </Scroll.Section>
      <Scroll.Section className="h-[100vh] flex justify-center items-center bg-1">
        <Scroll.Item keyframes={keyframes.heading}>
          <h1>Page Three</h1>
        </Scroll.Item>
      </Scroll.Section>
    </Scroll.Container>
  );
}
