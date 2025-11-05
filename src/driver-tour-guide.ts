import { Driver, DriveStep, Side, Alignment } from "driver.js";
import { TourGuide, TourStep } from "@schorts/shared-kernel";

export class DriverTourGuide implements TourGuide {
  private readonly driver: Driver;
  private readonly steps: Array<DriveStep> = [];

  constructor(driver: Driver) {
    this.driver = driver;
  }

  startTour(): void {
    this.driver.setSteps(this.steps);
    this.driver.drive();
  }

  addStep(step: TourStep): TourGuide {
    const driverStep: DriveStep = {
      popover: {
        title: step.title,
        description: step.description,
        side: this.translateSide(step.side),
        align: this.translateAlign(step.align),
      },
    };

    if (step.element) {
      driverStep['element'] = step.element;
    }

    this.steps.push(driverStep);

    return this;
  }

  private translateSide(side: TourStep["side"]): Side {
    switch (side) {
      case "BOTTOM":
        return "bottom";
      case "LEFT":
        return "left";
      case "RIGHT":
        return "right";
      case "TOP":
        return "top";
    }
  }

  private translateAlign(align: TourStep["align"]): Alignment {
    switch (align) {
      case "CENTER":
        return "center";
      case "END":
        return "end";
      case "START":
        return "start";
    }
  }
}
