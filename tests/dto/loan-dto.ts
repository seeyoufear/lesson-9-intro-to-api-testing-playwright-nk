export class LoanDto {
  income: number
  debt: number
  age: number
  employed: boolean
  loanAmount: number
  loanPeriod: number

  private constructor(
    income: number,
    debt: number,
    age: number,
    employed: boolean,
    loanAmount: number,
    loanPeriod: number,
  ) {
    this.income = income
    this.debt = debt
    this.age = age
    this.employed = employed
    this.loanAmount = loanAmount
    this.loanPeriod = loanPeriod
  }

  // valid factories
  static lowRisk(): LoanDto {
    return new LoanDto(20000, 0, 30, true, 500, 12)
  }

  static mediumRisk(): LoanDto {
    return new LoanDto(20000, 0, 30, true, 500, 6)
  }

  static highRisk(): LoanDto {
    return new LoanDto(500, 300, 18, false, 2600, 6)
  }

  static veryHighRiskNegative(): LoanDto {
    return new LoanDto(100, 0, 17, true, 1000, 12)
  }

  static boundaryMinValid(): LoanDto {
    return new LoanDto(1, 0, 17, true, 100, 3)
  }

  // invalid factories
  static incomeZero(): LoanDto {
    return new LoanDto(0, 0, 25, true, 500, 6)
  }

  static debtNegative(): LoanDto {
    return new LoanDto(1500, -1, 25, true, 500, 6)
  }
}
