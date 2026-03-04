import type { UserResponseDTO } from "@social/shared";
import type { User } from "./user.types";

export class UserMapper {
  static toUser(user: UserResponseDTO): User {
    return {
      id: user.id,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      name: user.name,
      email: user.email,
      username: user.username,
      role: user.role,
      isPrivate: user.isPrivate,
      isActive: user.isActive,
      postCount: user.postCount,
      followersCount: user.followersCount,
      followingCount: user.followingCount,
      profile: {
        id: user.profile?.id,
        createdAt: user.profile?.createdAt,
        updatedAt: user.profile?.updatedAt,
        title: user.profile?.title,
        company: user.profile?.company,
        bio: user.profile?.bio,
        gender: user.profile?.gender,
        website: user.profile?.website,
        birthDate: user.profile?.birthDate,
        location: user.profile?.location,
        avatarUrl: user.profile?.avatarUrl,
        contact: user.profile?.contact,
      },
    };
  }
}
