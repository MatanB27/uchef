interface FieldValidation {
valid: (val: string) => boolean;
msg: string;
}

export default function Validate(rules: string[], value: string): { isValid: boolean; msg: string } {
    const Validation: { [key: string]: FieldValidation } = {
      
      not_empty: {
        valid: (val: string) => /^.+$/.test(val),
        msg: 'Field is empty',
      },
      name: {
        valid: (val: string) => /^[A-Za-z]{1,30}$/.test(val),
        msg: 'Name not valid',
      },
      phone: {
        valid: (val: string) => /^\d{10}$/.test(val),
        msg: 'Phone number is not valid',
      },
      email: {
        valid: (val: string) => /^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,})+$/.test(val),
        msg: 'Email is not valid',
      },
      password: { // TODO: change valid 
        valid: (val: string) => /^[^\s]{6,}$/.test(val),
        msg: 'Password required 6 or more characters',
      },
    };
  
    let msg = '';
    let isValid = true;

    if (rules.length === 1 && rules[0] === '') {
      return { isValid: true, msg: '' };
    }

    for (const rule in rules) {
      const fieldValue = rules[rule];
      
      const field = Validation[fieldValue];
      if (!field.valid(value)) {
        msg = field.msg;
        isValid = false;
      }
    }
    return { isValid, msg };
  }