import RecipeList from "@/components/ui/recipe-list";

async function fetchListOfRecipes(){
    try {
      const apiResponse= await fetch("https://dummyjson.com/recipes");
      const data= await apiResponse.json();  
      //console.log(data?.recipes);
      
     return data?.recipes

    } catch (e) {
        throw new Error(e);
    }
}



export default async function Recipes(){
    const recipeList= await fetchListOfRecipes();
   // console.log(recipeList);
    
    return <RecipeList recipeList={recipeList}/>
}