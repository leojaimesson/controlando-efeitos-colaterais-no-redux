import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { ThemeProvider } from "styled-components";
import { ModalProvider } from "styled-react-modal";
import {
  render,
  cleanup,
  queryByTestId,
  fireEvent
} from "@testing-library/react";

import { themes } from "../../css.settings";
import { processor as processorMock } from "../../../__test__/mock/store/processor";
import { processor } from "../../redux";
import ConfirmStartProcessModalContainer from "../ConfirmStartProcessModalContainer";

const mockStore = configureStore([]);

const renderWithStoreMock = (initialState = {}) => {
  const store = mockStore(initialState);
  return {
    ...render(
      <Provider store={store}>
        <ThemeProvider theme={themes.default}>
          <ModalProvider>
            <ConfirmStartProcessModalContainer />
          </ModalProvider>
        </ThemeProvider>
      </Provider>
    ),
    store
  };
};

describe("<ConfirmStartProcessModalContainer />", () => {
  beforeEach(() => {
    cleanup();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("deve renderizar corretamente o modal quando o estado mudar para aberto", async () => {
    const { container } = renderWithStoreMock({
      ...processorMock,
      processor: {
        ...processorMock.processor,
        modals: {
          ...processorMock.processor.modals,
          confirmStartProcessModalIsOpen: true
        }
      }
    });
    expect(queryByTestId(container, "confirm-modal")).toBeTruthy();
  });

  it("deve renderizar corretamente o modal quando o estado mudar para fechado", async () => {
    const { container } = renderWithStoreMock({
      ...processorMock,
      processor: {
        ...processorMock.processor,
        modals: {
          ...processorMock.processor.modals,
          confirmStartProcessModalIsOpen: false
        }
      }
    });
    expect(queryByTestId(container, "confirm-modal")).not.toBeTruthy();
  });

  it("deve disparar a ação de fechar o modal quando o botão cancelar for clicado", async () => {
    const { store, container } = renderWithStoreMock({
      ...processorMock,
      processor: {
        ...processorMock.processor,
        modals: {
          ...processorMock.processor.modals,
          confirmStartProcessModalIsOpen: true
        }
      }
    });

    fireEvent.click(queryByTestId(container, "confirm-modal-cancel-button"));
    expect(store.getActions()[0]).toEqual(
      processor.actions.closeConfirmStartProcessModal()
    );
  });

  it("deve disparar a ação de iniciar um processo quando o botão de confirmação for clicado", async () => {
    const { store, container } = renderWithStoreMock({
      ...processorMock,
      processor: {
        ...processorMock.processor,
        modals: {
          ...processorMock.processor.modals,
          confirmStartProcessModalIsOpen: true
        }
      }
    });

    fireEvent.click(queryByTestId(container, "confirm-modal-confirm-button"));
    expect(store.getActions()[0]).toEqual(processor.actions.startProcess());
  });
});
