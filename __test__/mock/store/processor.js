export const processor = {
  processor: {
    isProcessing: false,
    totalValue: 0,
    tasks: {
      task1: {
        title: "Task 1",
        description: "Starts immediately",
        isProcessing: false,
        isProcessed: false,
        value: 0
      },
      task2: {
        title: "Task 2",
        description: "Starts after the first task has been finished",
        isProcessing: false,
        isProcessed: false,
        value: 0
      },
      task3: {
        title: "Task 3",
        description: "Starts after the second task has been finished",
        isProcessing: false,
        isProcessed: false,
        value: 0
      },
      task4: {
        title: "Task 4",
        description: "Starts after the third task has been finished",
        isProcessing: false,
        isProcessed: false,
        value: 0
      },
      task5: {
        title: "Task 5",
        description: "Starts after the fourth task has been finished",
        isProcessing: false,
        isProcessed: false,
        value: 0
      }
    },
    modals: {
      confirmStartProcessModalIsOpen: false,
      confirmCancelProcessModalIsOpen: false,
      confirmFinishProcessModalIsOpen: false
    }
  }
};
