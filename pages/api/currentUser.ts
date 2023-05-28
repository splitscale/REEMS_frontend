export class CurrentUser {
  private static id: string;
  private static created: Date;
  private static edited: Date;
  private static displayName: string;
  private static photoUrl: string;
  private static email: string;
  
  // Setter for id
  static set setId(id: string) {
    CurrentUser.id = id;
  }
  
  // Getter for id
  static get getId(): string {
    return CurrentUser.id;
  }
  
  // Setter for created
  static set setCreated(created: Date) {
    CurrentUser.created = created;
  }
  
  // Getter for created
  static get getCreated(): Date {
    return CurrentUser.created;
  }
  
  // Setter for edited
  static set setEdited(edited: Date) {
    CurrentUser.edited = edited;
  }
  
  // Getter for edited
  static get getEdited(): Date {
    return CurrentUser.edited;
  }
  
  // Setter for displayName
  static set setDisplayName(displayName: string) {
    CurrentUser.displayName = displayName;
  }
  
  // Getter for displayName
  static get getDisplayName(): string {
    return CurrentUser.displayName;
  }
  
  // Setter for photoUrl
  static set setPhotoUrl(photoUrl: string) {
    CurrentUser.photoUrl = photoUrl;
  }
  
  // Getter for photoUrl
  static get getPhotoUrl(): string {
    return CurrentUser.photoUrl;
  }
  
  // Setter for email
  static set setEmail(email: string) {
    CurrentUser.email = email;
  }
  
  // Getter for email
  static get getEmail(): string {
    return CurrentUser.email;
  }
}
