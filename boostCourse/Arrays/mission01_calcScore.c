#include <cs50.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

/* 문제 1. 학점을 계산해보자! */

/* 주요 상수 선언 */
const int EXIT_NUMBER = -1; // 프로그램을 종료하는 숫자
const int NUMBER_OF_GRADES = 9; // 학점 배열 초기화
const char *GRADES[NUMBER_OF_GRADES] = {"A+", "A", "B+", "B", "C+", "C", "D+", "D", "F"}; // 학점 배열
const int SCORES[NUMBER_OF_GRADES] = {95, 90, 85, 80, 75, 70, 65, 60, 0}; // 학점 기준 점수 배열

/* 사용할 학점 계산 함수 선언 */
char* calculateGrade(int studentScore, const int scores[], const char *grades[]);

/* 실행 */
int main(void)
{
    // 주요 변수 초기화
    int studentScore = 0; // 사용자가 입력한 점수 or EXIT_NUMBER(-1)

    // 학점 프로그램에 대한 설명
    printf("학점 프로그램\n");
    printf("종료를 원하면 \"-1\"을 입력\n");
    printf("[학점테이블]\n");
    printf("점수: ");
    for(int i = 0; i < NUMBER_OF_GRADES; i++){
        printf("%d\t", SCORES[i]);
    }
    printf("\n학점: ");
    for(int i = 0; i < NUMBER_OF_GRADES; i++){
        (i % 2 == 0 && i != 8) ? printf("%c+ \t", *GRADES[i]) : printf("%c \t", *GRADES[i]) ;
    }
    printf("\n");

    // 성적 입력 받기
    while(true)
    {
        studentScore = get_int("성적을 입력해주세요: ");

        if(studentScore <= 100 && studentScore >= 0) // 성적이 100점 이하 0점 이상이면,
        {
            char *grade = calculateGrade(studentScore, SCORES, GRADES); // 학점 계산 함수 호출
            printf("학점은 %s 학점 입니다.\n", grade);
        }
        else if(studentScore == EXIT_NUMBER) // 종료를 원하면(= -1 을 입력하면)
        {
            printf("학점 프로그램을 종료합니다.\n");
            break;
        }
        else // 그 외 ( -1은 아니지만, 100 이상 or 0 이하 숫자를 입력하면)
        {
            printf("** %d 성적을 올바르게 입력하세요. 범위는 0 ~ 100 입니다.\n", studentScore);
        }
    }
}

/* 학점 계산 함수 */
char* calculateGrade(int studentScore, const int scores[], const char* grades[])
{
    char *grade;
    int index = 0;

    for(int i = 0; i < NUMBER_OF_GRADES; i++ ){
        if(studentScore - scores[i] >= 0 ){
            break;
        }
        index ++;
    }

    grade = malloc(sizeof(char) * strlen(grades[index]));
    strcpy(grade, grades[index]);
    return grade;
}

