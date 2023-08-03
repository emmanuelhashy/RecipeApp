import Recipe from "./model"

const getRecipes = (count) => {
    const recipes = [
        new Recipe(
            1,
            'Almond Muffins',
            `Mix together egg, milk, oil and almond extract. In another bowl, mix together flour, sugar, baking powder, nutmeg, cinnamon, salt and chopped almonds. Mix the two mixtures together. If batter seems dry, add a little more milk. Spoon into paper muffin cups. Bake at 390° for about 15 minutes`,
            [
                '1 egg, beaten (medium)',
                '2 cups flour',
                '3/4 cup Milk',
                '1/2 cup almonds, finely chopped',
                '1/2 cup sugar',
                '1/2 cup oil',
                '3 teaspoons baking powder',
                '1/2 teaspoon almond extract',
                '1/4 teaspoon cinnamon',
                '1/4 teaspoon nutmeg',
                '1/8 teaspoon salt',]
        ),
        new Recipe(
            2,
            'Baked Hash Browns',
            `Mix together and put in 9 x 13 lightly greased pan. Sprinkle with paprika.
            Bake 350 degrees for 1 1/2 hours.`,
            [
                '1 package 32) Cubed Frozen Hash Brown Potatoes',
                '2 cans cream of potato soup',
                '1 can cream of celery soup',
                '1 - 16 ounce container of Sour Cream',
            ]
        ),
        new Recipe(
            3,
            'Baked Tortellini',
            `Sauté onions, garlic, and mushrooms in margarine and oil until mushroom liquid is all gone. Remove from heat and add peas and prosciutto. Mix thoroughly.
            In baking dish, place well drained tortellini and mushroom mixture. Add heavy cream and mix. Sprinkle with grated cheese; cover. Bake at 375° for 25 minutes.`,
            [
                '1 pound cheese tortellini, cooked al dente',
                '1 onion,chopped finely (small)',
                '2 cloves garlic,chopped finely (large cloves)',
                '1/2 pound fresh mushrooms,sliced',
                '2 tablespoons grated cheese',
                '1 cup heavy cream',
                '1 cup frozen peas,defrosted and drained',
                '1/2 stick margarine (2 ounce)',
                '3 tablespoons olive oil',
            ]
        ),
        new Recipe(
            4,
            'Banana Pudding',
            `Mix sugar, flour, salt, milk and eggs. Cook over medium heat until thick. Add vanilla. Place wafers and bananas in bottom of bowl. Pour part of mixture over wafers and bananas. Repeat layering until filling is gone.`,
            [
                '3/4 cup sugar',
                '2 tablespoons flour',
                '1/4 teaspoon salt',
                '2 cups milk',
                '3 Eggs',
                '1 teaspoon vanilla',
                'Vanilla wafers',
                'Bananas',
            ]
        ),
        new Recipe(
            5,
            'Fish Stew',
            `Fry the bacon. Remove bacon from pan and brown onions in drippings. Place 5 cups of water in separate large pot. Bring to a boil. Pour onions and drippings into water. Add fish, hot sauce, Worcestershire sauce, salt and pepper. Cook fish until completely done. Add catsup and tomato paste. Cook on simmer for 2 hours. Serve over rice.`,
            [
                '3 pounds flounder fillet',
                '1 cup chopped onions',
                '1/2 pound bacon',
                '1 can tomato paste (8 ounce can)',
                '1 bottle catsup',
                '1 teaspoon Tabasco Sauce',
                'pepper',
                '1 tablespoon celery salt',
                '2 tablespoons Worcestershire sauce',
            ]
        ),
        new Recipe(
            6,
            'Lettuce Layered Salad',
            `Make a layer of lettuce in bottom of pan (9x13). Sprinkle frozen peas on lettuce, sprinkle onions on peas, sprinkle bell pepper on onions, and then sprinkle 1/2 of crisp bacon on top. Cover with 1-cup mayonnaise mixed with 3 Tbs. sugar. Sprinkle crisp bacon then top with cheese. Refrigerate overnight. Stir well just before serving.`,
            [
                '1 pound bacon, fried crisp',
                '1 head Lettuce',
                '1 onion, chopped',
                '1 bunch green onions',
                '1 package frozen peas',
                '1 bell pepper, chopped',
                '1 cup cheese, shredded',
            ]
        )
    ];

    if(count) {
        return recipes.filter((recipe, index) =>  index < count);
    }
    return recipes
}

export default getRecipes;