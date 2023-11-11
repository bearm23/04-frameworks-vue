import { Member } from "@/types";

export const githubService = {
  async get(organization: string): Promise<Member[]> {
    try {
      return await fetch(
        `https://api.github.com/orgs/${organization}/members`,
      ).then(response => {
        if (response.status !== 200) {
          throw new Error("Error fetching members");
        }
        return response.json();
      });
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  async getMember(login: Member["login"]): Promise<Member | undefined> {
    if (!login) throw new Error("login is required");
    return await fetch(`https://api.github.com/users/${login}`).then(response =>
      response.json()
    );
  }
};
