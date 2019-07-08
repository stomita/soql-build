import Field from "./Field";

export default class FieldReference extends Field {
  path: string[];

  constructor(field: string, _baseObjectName: string) {
    super();
    this.path = field.split(".");
  }

  toSOQL() {
    return this.path.join(".");
  }
}
