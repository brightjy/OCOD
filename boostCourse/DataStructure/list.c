#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int list[3];
    // int *list = malloc(3 * sizeof(int));

    list[0] = 1;
    list[1] = 2;
    list[2] = 3;

    int *tmp = realloc(list, 4 * sizeof(int));
    if (tmp == NULL)
    {
        return 1;
    }
    list = tmp;

    // int *tmp = malloc(4 * sizeof(int));
    // if (tmp == NULL)
    // {
    //     return 1;
    // }

    // // copy integers from old array into new array
    // for (int i = 0; i < 3; i++)
    // {
    //     tmp[i] = list[i];
    // }
    tmp[3] = 4;


    // free(list);


    for (int i = 0; i < 4; i++)
    {
        printf("%i\n", list[i]);
    }
}