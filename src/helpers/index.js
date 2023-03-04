const alphabetlc = "abcdefghijklmnopqrstuvwxyz";
const alphabetCap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const nextletterlc = (letter) => {
  if (alphabetlc.includes(letter)) {
    const index = alphabetlc.indexOf(letter);
    return alphabetlc[index + 1];
  } else {
    return undefined;
  }
};

export const nextletterCap = (letter) => {
  if (alphabetCap.includes(letter)) {
    const index = alphabetCap.indexOf(letter);
    return alphabetCap[index + 1];
  } else {
    return undefined;
  }
};

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

export const numberRangeInc = (start, end) => {
	if (!Number.isInteger(start) || !Number.isInteger(end)) {
		return undefined;
	}
	
	const output = []
	
	for (let i = start; i <= end; i++) {
		output.push(i)
	}
	
	return output;
}

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
