class Student extends Person {
  // stays in Student class since it's specific to students only
  enroll(cohort) {
    this.cohort = cohort;
  }
}

class Mentor extends Person {
  // specific to mentors
  goOnShift() {
    this.onShift = true;
  }

  // specific to mentors
  goOffShift() {
    this.onShift = false;
  }
}
//Change the constructor for Person by adding a new field to it(like email).How does this change the subclasses ?
//Change your version of the Person class so that it contains another method. Can this method be called on in each of the two subclasses? Give it a go!