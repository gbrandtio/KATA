export function getLastNameFirstNameFullUserName(
    user: { firstName?: string; lastName?: string; middleName?: string },
    includeMiddleName = false,
  ): string {
    const { firstName, lastName, middleName } = user;
  
    const userNameArray: string[] = [];
  
    if (firstName) { 
      userNameArray.push(firstName); 
    }
  
    if (includeMiddleName && middleName) { 
      userNameArray.push(middleName); 
    }
  
    if (lastName) {
      const formattedLastName: string = userNameArray.length > 0 ? `${lastName},` : lastName;
  
      userNameArray.unshift(formattedLastName);
    }
  
    return userNameArray.join(' ');
  }