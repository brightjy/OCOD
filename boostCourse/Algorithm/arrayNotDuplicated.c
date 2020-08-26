#include <stdio.h>
#include <stdlib.h>
#include <string.h>

enum
{
    False, True
};

void removeDuplicates ( int *arr, int *size );
int searchKeyInArr(int *arr, int size, int key);
void ascendArr ( int *arr, int size );
void printArr ( int *arr, int size );


int main()
{
    int size = 10;
    int arr[10] = {5,5,7,1,9,3,2,8,1,1};


    removeDuplicates(arr, &size); // 중복 제거 O(n^2)
    ascendArr (arr, size); // 오름차순 정열 by 버블정렬 O(n^2)
    printArr(arr, size);

    return 0;
}

void removeDuplicates ( int *arr, int *size )
{
    int *uniqueArr = (int*)calloc(*size, sizeof(int));
    int uniqueArrCount = 0;

    for ( int i = 0; i < *size; i++ )
    {
        if ( !searchKeyInArr(uniqueArr, uniqueArrCount, arr[i]) )
        {
            uniqueArr[uniqueArrCount++] = arr[i];
        }
    }

    memset(arr, 0, sizeof(arr[0])*(*size));

    for ( int i = 0; i < uniqueArrCount; i++ )
    {
        arr[i] = uniqueArr[i];
    }

    if ( uniqueArr )
    {
        free(uniqueArr);
        uniqueArr = NULL;
    }

    *size = uniqueArrCount;

}

int searchKeyInArr(int *arr, int size, int key)
{
    for ( int i = 0; i < size; i++ )
    {
        if ( arr[i] == key )
        {
            return True;
        }
    }
    return False;
}

void ascendArr ( int *arr, int size )
{
    int temp;
    for ( int i = 0; i < size; i++ )
    {
        for ( int j = 0; j < size-i-1; j++ )
        {
            if ( arr[j] > arr[j+1] )
            {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}


void printArr ( int *arr, int size )
{
    for ( int i = 0; i < size; i++ )
    {
        printf("%d", arr[i]);
    }
    printf("\n");
}



