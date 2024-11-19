import pygame  
import random



pygame.init()
sc = pygame.display.set_mode((800,800))
pygame.display.set_caption("pacman ")

WHITE = (255,255,255)
pacman = pygame.image.load("pacman.png")
pygame.transform.scale(pacman,(1,1))
pacman1 = pacman.get_rect()

pacman_speed_x = 0
pacman_speed_y = 0
pacman_speed = 5
running = True

while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    pacman_speed_x = 0
    pacman_speed_y = 0

    keys_pressed = pygame.key.get_pressed()
  

    
    if keys_pressed[pygame.K_w]:
        pacman_speed_y = -pacman_speed
        print(pacman_speed_y,pacman_speed_x)
    if keys_pressed[pygame.K_s]:
        pacman_speed_y = pacman_speed
        print(pacman_speed_y,pacman_speed_x)
    if keys_pressed[pygame.K_a]:
        pacman_speed_x = -pacman_speed
        print(pacman_speed_y,pacman_speed_x)
    if keys_pressed[pygame.K_d]:
        pacman_speed_x = pacman_speed
        print(pacman_speed_y,pacman_speed_x)



    pacman1.x += pacman_speed_x
    pacman1.y += pacman_speed_y


    sc.fill(WHITE)
    sc.blit(pacman, pacman1)

    pygame.display.flip()

pygame.quit()
































    






























    
