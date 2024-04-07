const alphabetlc = "abcdefghijklmnopqrstuvwxyz";
const alphabetCap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// lower case
export const nextletterlc = (letter) => {
  if (letter !== "z" && alphabetlc.includes(letter)) {
    const index = alphabetlc.indexOf(letter);
    return alphabetlc[index + 1];
  } else {
    return undefined;
  }
};

// Capital letters
export const nextletterCap = (letter) => {
  if (letter !== "Z" && alphabetCap.includes(letter)) {
    const index = alphabetCap.indexOf(letter);
    return alphabetCap[index + 1];
  } else {
    return undefined;
  }
};

// number range, exclusive of end
export const numberRangeExc = (start, end) => {
	if (!Number.isInteger(start) || !Number.isInteger(end)) {
		return undefined;
	}
	
	const output = []
	
	for (let i = start; i < end; i++) {
		output.push(i)
	}
	
	return output;
}

// number range, inclusive of end
export const numberRange = (start, end) => {
	if (!Number.isInteger(start) || !Number.isInteger(end)) {
		return undefined;
	}
	
	const output = []
	
	for (let i = start; i <= end; i++) {
		output.push(i)
	}
	
	return output;
}

// capitals
export const letterRangeCap = (start, end) => {
	if (!alphabetCap.includes(start) || !alphabetCap.includes(end) || (start > end)) {
		return undefined;
	}
	
	const output = []
	
	for (let i = start; i <= end; i = nextletterCap(i)) {
		output.push(i)
	}
	
	return output;
}

// lower case
export const letterRangelc = (start, end) => {
	if (!alphabetlc.includes(start) || !alphabetlc.includes(end) || (start > end)) {
		return undefined;
	}
	
	const output = []
	
	for (let i = start; i <= end; i = nextletterCap(i)) {
		output.push(i)
	}
	
	return output;
}
