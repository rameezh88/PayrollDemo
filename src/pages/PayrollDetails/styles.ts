import { IonButton, IonContent, IonText } from "@ionic/react";
import styled from "styled-components";

export const ContentContainer = styled.div`
  flex-direction: column;
  background-color: red;
`;

export const DownloadButton = styled(IonButton)`
  margin-top: 15px;
`;

export const ErrorContainer = styled.div`
  padding: 15px;
`;

export const ErrorMessage = styled(IonText)`
  color: red;
`;
