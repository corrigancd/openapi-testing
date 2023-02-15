export type SavedObjectVersions = '13.2.0' | '14.0.0';

// ES mapping types
export type Keyword = string;
export type Double = number;


// recursive range checking example. 
// Source: https://stackoverflow.com/questions/39494689/is-it-possible-to-restrict-number-to-a-certain-range/70307091#70307091
type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>
export type Range<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>> // if we ever need a type that specifies a range rule

