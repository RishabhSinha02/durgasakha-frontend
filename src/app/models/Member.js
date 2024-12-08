export default class Member {
  constructor(
    id,
    user,
    bio,
    profile_photo,
    phone_number,
    ngo_role,
    professional_role,
    joined_at,
    facebook_link,
    instagram_link,
    twitter_link,
    linkedin_link
  ) {
    this.id = id;
    this.user = {
      name: user.name,
    };
    this.bio = bio;
    this.profile_photo = profile_photo;
    this.phone_number = phone_number;
    this.ngo_role = ngo_role;
    this.professional_role = professional_role;
    this.joined_at = joined_at;
    this.facebook_link = facebook_link;
    this.instagram_link = instagram_link;
    this.twitter_link = twitter_link;
    this.linkedin_link = linkedin_link;
  }

  static fromJson(json) {
    return new Member(
      json.id,
      json.user,
      json.bio,
      json.profile_photo,
      json.phone_number,
      json.ngo_role,
      json.professional_role,
      json.joined_at,
      json.facebook_link,
      json.instagram_link,
      json.twitter_link,
      json.linkedin_link
    );
  }

  static fromJsonArray(json) {
    return json.map(Member.fromJson);
  }
}
