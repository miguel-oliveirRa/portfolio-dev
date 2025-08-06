export async function getPortfolioRepos() {
  const username = "miguel-oliveirRa";
  const url = `https://api.github.com/users/${username}/repos?per_page=35`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Erro ao buscar os repositórios");
  }
  const allRepos = await response.json();
  const mainRepoNames = [
    "Pokedex",
    "CRUD-ASP.NET",
    "GitHub-Wiki",
    "Desafio-SQL",
    "trilha-net-testes-unitarios-desafio",
    "trilha-net-azure-desafio",
    "AgroStock",
  ];
  const filteredRepos = allRepos.filter((repo: any) =>
    mainRepoNames.includes(repo.name)
  );

  const agroStock =
    filteredRepos.find((repo: any) => repo.name === "AgroStock") || null;
  return { filteredRepos, agroStock };
}
