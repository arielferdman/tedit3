import { Machine, interpret } from "xstate";

const machine = Machine({
  id: "machine",
  initial: "edit",
  states: {
    edit: {
      on: {
        METAPRESSED: "meta",
      },
    },
    meta: {
      on: {
        METAPRESSED: "edit",
        CHARPRESSED:  
      },
    },
  },
});

// Edit your service(s) here
const service = interpret(machine).onTransition((state) => {
  console.log(state.value);
});

service.start();

service.send("TOGGLE");
service.send("TOGGLE");
