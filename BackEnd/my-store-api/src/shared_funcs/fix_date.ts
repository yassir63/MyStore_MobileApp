

export const fix_date = (dat: Date): Date => {
    //json doesnt support date format so we do send it in string format and transfom it here
    const date = new Date(dat);
    // new date return GMT it adds hours so we have to fix it
    var userTimezoneOffset = date.getTimezoneOffset() * 60000;
    var d = new Date(date.getTime() - userTimezoneOffset);

    return d;
  };