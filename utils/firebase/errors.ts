export const printErrorMessage = (err: any) => {
  switch (err.code) {
    case 'auth/user-not-found':
      return 'User not found';
    case 'auth/wrong-password':
      return 'Incorrect password';
    case 'auth/invalid-email':
      return 'Invalid email address';
    case 'auth/email-already-in-use':
      return 'Email adress is already in use';
    case 'auth/weak-password':
      return 'Password is too weak';
    case 'auth/too-many-requests':
      return 'Too many requests';
    default:
      return 'An unexpected error occured';
  }
};
