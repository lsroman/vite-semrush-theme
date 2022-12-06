import Button from "@semcore/button";
import { Flex } from "@semcore/flex-box";

function App() {
  return (
    <Flex direction="column" gap={4} alignItems="flex-start">
      <Button use="primary">Primary Button</Button>
      <Button use="secondary">Secondary Button</Button>
    </Flex>
  );
}

export default App;
