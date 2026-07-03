class Portion {
  private strength: number = 0;

  constructor(private readonly formula: string) {
    this.formula = formula;
  }

  /**
   * brew
   */
  public brew(): Portion | Error {
    let ingredients: string[] = this.formula.split("");
    for (let index = 0; index < ingredients.length; index++) {
      switch (ingredients[index]) {
        case "w":
          if (ingredients[0] !== "w") {
            throw new Error("error: potion must start with water");
          }
          this.strength += 0;
          break;
        case "h":
          this.strength += 5;
          break;
        case "m":
          this.strength += 10;
          break;
        case "s":
          this.strength *= 2;
          break;
        case "f":
          if (ingredients[ingredients.length - 1] !== "f") {
            throw new Error("error: firefly powder ignited the potion");
          }
          this.strength += 50;
          break;
        default:
          break;
      }
    }
    return this;
  }

  /**
   * dilute
   */
  public dilute(): Portion {
    this.strength = Math.floor(this.strength / 2);
    return this;
  }

  /**
   * concentrate
   */
  public concentrate(): Portion {
    this.strength *= 2;
    return this;
  }

  public get portionStrength(): number {
    return this.strength;
  }
}

const portion = new Portion("hhmw");

try {
  const brewed = portion.brew().dilute().dilute().concentrate();
  console.log(brewed);
} catch (error: any) {
  console.error(error);
}

// console.log(portion.portionStrength);
