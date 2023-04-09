import { Box, Flex } from "@chakra-ui/react";
import Toolbar from "./Toolbar/Toolbar";
import Map from "./Map/Map";
import { useState } from "react";
import NetworkGraph from "./NetworkGraph/NetworkGraph";

function App() {
  const [showMap, setShowMap] = useState(false);
  const [path, setPath] = useState([]);
  const [fileContent, setFileContent] = useState("");

  const onSwitchToggleHandle = (value) => {
    setFileContent("");
    setShowMap(value);
  };

  const onReadFileHandler = (value) => {
    setFileContent(value);
  };

  const onSearchPathHandler = (value) => {
    if (!showMap) {
      setPath([2,4,3])
    } else {

    }
  };

  return (
    <Flex
      position="relative"
      flexDirection="column"
      alignItems="center"
      bgPos="bottom"
      h="100vh"
      w="100vw"
      bgColor={"gray.800"}
    >
      <Box position="absolute" left={0} top={0} h="100%" w="100%">
        {showMap && <Map />}
        {!showMap && <NetworkGraph content={fileContent} path={path} />}
      </Box>
      <Toolbar
        onSwitchToggle={onSwitchToggleHandle}
        onReadFile={onReadFileHandler}
        onSearch={onSearchPathHandler}
      />
    </Flex>
  );
}

export default App;
