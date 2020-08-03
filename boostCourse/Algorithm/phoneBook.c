#include <cs50.h>
#include <stdio.h>
#include <string.h>

typedef struct
{
    string names;
    string numbers;
}
person;


int main(void)
{
    /*string names[4] = {"ENNA", "RODRIGO", "BRIAN", "DAVID"};
    string numbers[4] = {"1234-5678", "23455-3456", "3456-4567", "4567-5678"};*/

    person people[4];

    people[0].names = "ENNA";
    people[0].numbers = "1234-5678";

    people[1].names = "RODRIGO";
    people[1].numbers = "123455-3456";

    people[2].names = "BRIAN";
    people[2].numbers = "3456-4567";

    people[3].names = "DAVID";
    people[3].numbers = "4567-5678";

    for(int i = 0; i < 4; i++)
    {
        if (strcmp(people[i].names, "ENNA") == 0)
        {
            printf("%s\n", people[i].numbers);
            return 0;
        }
    }
    printf("Not found\n");
    return 1;

}