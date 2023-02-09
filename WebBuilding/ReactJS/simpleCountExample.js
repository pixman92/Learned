import { observable, computed } from "mobx";

class CounterStore {
  @observable count = 0;

  @computed get doubleCount() {
    return this.count * 2;
  }

  increment() {
    this.count += 1;
  }
}

const store = new CounterStore();

const Counter = observer(({ store }) => {
  return (
    <div>
      <button onClick={() => store.increment()}>Click Me</button>
      <div>{store.count}</div>
      <div>{store.doubleCount}</div>
    </div>
  );
});

ReactDOM.render(<Counter store={store} />, document.getElementById("root"));
