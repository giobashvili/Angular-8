export class RecipeModel {
  // tslint:disable-next-line:ban-types
  public name: String;
  // tslint:disable-next-line:ban-types
  public description: String;
  // tslint:disable-next-line:ban-types
  public imagePath: String;

  constructor(name: string, description: string, imagePath: string) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }
}

