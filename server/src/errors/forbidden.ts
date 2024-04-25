class Forbidden extends Error {
    public status: number;

    constructor(message = 'Access denied') {
      super(message);
      this.status = 403;
      this.name = 'Forbidden';
    }
  }
    
export default Forbidden;
    