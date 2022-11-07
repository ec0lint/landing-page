export interface IReference {
    url: string,
    text: string,
    accessed: string
}
  
export interface IReferenceObj {
    data: IReference[]
}

export interface IBlog {
    title: string,
    url: string,
    text: JSX.Element[],
    references?: IReference[]
}

export interface IBlogObj {
    data: IBlog
}

export interface IRule {
    name: string,
    overview: JSX.Element | string,
    CO2?: JSX.Element,
    examples: string,
    packages: string[]
}

export interface IRuleObj {
    data: IRule
}
