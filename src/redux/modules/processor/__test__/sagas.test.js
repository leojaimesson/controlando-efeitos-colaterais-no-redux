import { expectSaga } from "redux-saga-test-plan";
import { reducer, initialState } from "../reducers";
import * as actions from "../actions";
import sagas, { watchForTaskActions, processTask1 } from "../sagas";

describe("Processor sagas", () => {
  it("deve abrir o modal de confirmação quando o início de um processo for anunciado", async () => {
    return expectSaga(sagas)
      .withReducer(reducer)
      .dispatch(actions.announceStartProcess())
      .put(actions.openConfirmStartProcessModal())
      .silentRun()
      .then(result => {
        expect(result.storeState.modals).toEqual(
          expect.objectContaining({
            confirmStartProcessModalIsOpen: true
          })
        );
      });
  });

  it("deve abrir o modal de confirmação quando o cancelamento de um processo for anunciado", async () => {
    return expectSaga(sagas)
      .withReducer(reducer)
      .dispatch(actions.announceCancelProcess())
      .put(actions.openConfirmCancelProcessModal())
      .silentRun()
      .then(result => {
        expect(result.storeState.modals).toEqual(
          expect.objectContaining({
            confirmCancelProcessModalIsOpen: true
          })
        );
      });
  });

  it("deve abrir o modal de confirmação quando um processo for finalizado", async () => {
    return expectSaga(sagas)
      .withReducer(reducer)
      .dispatch(actions.finishProcess())
      .put(actions.openConfirmFinishProcessModal())
      .silentRun()
      .then(result => {
        expect(result.storeState.modals).toEqual(
          expect.objectContaining({
            confirmFinishProcessModalIsOpen: true
          })
        );
      });
  });

  it("deve resetar o estado quando o modal de confirmação for fechado", async () => {
    return expectSaga(sagas)
      .withReducer(reducer)
      .dispatch(actions.closeConfirmFinishProcessModal())
      .put(actions.resetProcessState())
      .silentRun()
      .then(result => {
        expect(result.storeState).toEqual(initialState);
      });
  });

  it("deve iniciar a primeira task imediatamente após o início de um processo", async () => {
    return expectSaga(sagas)
      .withReducer(reducer)
      .dispatch(actions.startProcess())
      .put(actions.startTask1())
      .silentRun()
      .then(result => {
        expect(result.storeState.tasks.task1).toEqual(
          expect.objectContaining({
            isProcessing: true
          })
        );
      });
  });

  it("a", async () => {
    return expectSaga(sagas)
      .withReducer(reducer)
      .dispatch(actions.startProcess())
      .fork(watchForTaskActions)
      .run()
      .then(result => {
        console.log(result);
      });
  });
});
