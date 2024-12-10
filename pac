import pygame
import random

# Initialize pygame
pygame.init()

# Set up the display
sc = pygame.display.set_mode((1200, 850))
pygame.display.set_caption("Pacman")

# Define colors
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)

# Wall class
class Wall(pygame.sprite.Sprite):
    def __init__(self, x, y, width, height):
        super().__init__()
        self.image = pygame.Surface((width, height))
        self.image.fill(BLACK)  # Black color for wall
        self.rect = self.image.get_rect()
        self.rect.topleft = (x, y)

# Player class
class Player(pygame.sprite.Sprite):
    def __init__(self):
        super().__init__()
        try:
            self.image = pygame.image.load("pacman.png")
        except pygame.error:
            self.image = pygame.Surface((30, 50))
            self.image.fill((255, 255, 0))  # Fallback: yellow rectangle
        self.image = pygame.transform.scale(self.image, (30, 50))
        self.rect = self.image.get_rect()
        self.rect.topleft = (300, 300)
        self.speed = 1

    def update(self, keys, walls):
        # Move player based on key presses
        dx, dy = 0, 0
        if keys[pygame.K_w]:
            dy = -self.speed
        if keys[pygame.K_s]:
            dy = self.speed
        if keys[pygame.K_a]:
            dx = -self.speed
        if keys[pygame.K_d]:
            dx = self.speed
        
        # Tentative new position
        self.rect.x += dx
        self.rect.y += dy

        # Check for collision with walls and reset position if necessary
        for wall in walls:
            if self.rect.colliderect(wall.rect):
                # Undo movement on collision
                if dx > 0:  # Moving right
                    self.rect.right = wall.rect.left
                if dx < 0:  # Moving left
                    self.rect.left = wall.rect.right
                if dy > 0:  # Moving down
                    self.rect.bottom = wall.rect.top
                if dy < 0:  # Moving up
                    self.rect.top = wall.rect.bottom

# Create sprite groups
all_sprites = pygame.sprite.Group()
walls = pygame.sprite.Group()

# Create player object and add to the group
player = Player()
all_sprites.add(player)

# Create walls and add to the walls group
wall_positions = [
    (20, 200, 10, 100),
    (200, 200, 100, 10),
    (400, 400, 10, 150),
    (20, 250, 10, 50),
    (200, 120, 70, 10),
    (400, 500, 10, 80)
]

for x, y, width, height in wall_positions:
    wall = Wall(x, y, width, height)
    walls.add(wall)
    all_sprites.add(wall)

# Main game loop
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        if event.type == pygame.MOUSEBUTTONDOWN:
            pos_m = pygame.mouse.get_pos()
            print(pos_m)

    # Fill background color
    sc.fill((230, 230, 231))  # Background color

    # Handle player movement
    keys = pygame.key.get_pressed()
    player.update(keys, walls)

    # Draw all sprites (including walls and player)
    all_sprites.draw(sc)

    # Update the screen
    pygame.display.update()

# Quit pygame
pygame.quit()






























    






























    
