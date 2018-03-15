import React from "react";
import { Spinner, Container } from "native-base";
import { colors } from "../utils";

export default ({ isLoading, children }) => (
  <Container>
    {isLoading === true ? <Spinner color={colors.primary} /> : children}
  </Container>
);
