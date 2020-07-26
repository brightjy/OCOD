#include <cs50.h>
#include <stdio.h>

float average(int length, int array[]);

/* 점수를 입력받아 평균을 계산*/
int main(void)
{
    // 사용자에게 점수 개수를 받고
    int n = get_int("Number of scores: ");

    // 받은 개수 만큼 공간을 가진 배열을 만든다.
    int scores[n];

    // 점수를 의도한 개수만큼 받아 배열에 넣는다.
    for(int i = 0; i < n; i++)
    {
        scores[i] = get_int("Score %i: ", i+1);
    }

    // 평균을 구하는 함수를 호출+출력
    float avg = average(n, scores);
    printf("Average: %.1f\n", avg);

}

// 평균을 구하는 함수
float average(int length, int array[])
{
    int sum = 0;
    for(int i = 0; i < length; i++)
    {
        sum += array[i];
    }
    return (float) sum / length;
}